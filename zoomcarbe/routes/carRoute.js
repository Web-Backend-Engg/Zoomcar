const express = require("express");
const router = express.Router();
const Car = require("../models/carModel");
const OpenAI = require("openai");

router.get("/getallcars", async (req, res) => {
  try {
    const cars = await Car.find();
    res.send(cars);
  } catch (error) {
    return res.status(400).json(error);
  }
});

router.get("/getcar/:id", async(req, res) => {
  try {
    const car = await Car.findOne({_id: req.params.id});
    res.status(200).json(car);
  } catch (error) {
    return res.status(400).json(error);
  }
});

router.post("/addcar", async (req, res) => {
  try {
    const newcar = new Car(req.body);
    await newcar.save();
    res.send("Car added successfully");
  } catch (error) {
    return res.status(400).json(error);
  }
});

router.post("/editcar", async (req, res) => {
  try {
    const car = await Car.findOne({ _id: req.body._id });
    car.name = req.body.name;
    car.image = req.body.image;
    car.fuelType = req.body.fuelType;
    car.rentPerHour = req.body.rentPerHour;
    car.capacity = req.body.capacity;

    await car.save();

    res.send("Car details updated successfully");
  } catch (error) {
    return res.status(400).json(error);
  }
});

router.post("/deletecar", async (req, res) => {
  try {
    await Car.findOneAndDelete({ _id: req.body.carid });

    res.send("Car deleted successfully");
  } catch (error) {
    return res.status(400).json(error);
  }
});

router.post("/getprompt", async (req, res) => {
  try {
    const openai = new OpenAI({
      apiKey: "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"
    });
    const completion = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [
        {
          role: "user",
          content: `Give some general insights about ${req.body.car} along with its handling, top speed, running and fuel cost in just 4 lines.`,
        },
      ],
    });
    res.status(200).json(completion.choices[0].message);
  } catch (error) {
    return res.status(400).json(error);
  }
})

module.exports = router;