const express = require("express");
const reservationsRouter = express.Router();
const { requireUser } = require("./utils");

const {
  getReservation,
  deleteReservation,
  updateBook,
  getBook,
} = require("../db");

reservationsRouter.get("/", (req, res) => {
    res.send("hello from reservations");
  });

  reservationsRouter.delete("/:id", async (req, res, next) => {
    try {
    
      const reservation = await getReservation(req.params.id);
      console.log("RESERVATION", reservation); 

      if (!reservation) {
        next({
          name: "ReservationDoesNotExist",
          message: "Nothing to return here...",
        });
        return;
      } else if (req.user.id !== reservation.userid) {
        next({
        name: "Permission Denied",
        message: "You do not have permission to return this book",
      });
      return;

    } else {
        const deletedReservation = await deleteReservation(req.params.id);
      console.log(deleteReservation);
      const book = await getBook(deletedReservation.bookId);
      if (deletedReservation) {
        updateBook(book.id, true);
      }
      res.send({ deletedReservation });
    }

    res.send("deleted");
  } catch (err) {
    next(err);
  }
});

module.exports = reservationsRouter;
