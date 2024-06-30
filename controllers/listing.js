const Listing = require("../models/listing");

module.exports.index = async (req, res, next) => {
  try {
    const allListings = await Listing.find({});
    res.render("index", { allListings });
  } catch (err) {
    next(err);
  }
};

module.exports.redirectRoot = async function (req, res, next) {
  res.redirect("/");
}

//RENDER NEW FORM
module.exports.renderNewForm = async (req, res) => {
  res.render("new");
};

//SHOW NEW LISTING
module.exports.showListing = async (req, res, next) => {
  try {
    const { id } = req.params;
    const listing = await Listing.findById(id)
      .populate({
        path: "reviews",
        populate: {
          path: "author",
        },
      })
      .populate("owner");
    res.render("show", { listing });

    // console.log(listing);
  } catch (err) {
    next(err);
  }
};

// CREATE THE EDITED LISTINGS
module.exports.createListing = async (req, res) => {
  const newListing = new Listing(req.body.listing);
  newListing.owner = req.user._id;

  await newListing.save();

  req.flash("success", "New Listing Created!!");
  res.redirect("/");
};

//RENDER EDIT FORM
module.exports.renderEditForm = async (req, res) => {
  try {
    const { id } = req.params;
    const listing = await Listing.findById(id);
    res.render("edit", { listing });
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
};

// UPDATE THE EDITED LISTING
module.exports.updateListing = async (req, res) => {
  try {
    let { id } = req.params;
    await Listing.findByIdAndUpdate(id, { ...req.body.listing });
    res.redirect(`/listings/${id}`);
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
};

//DELETE LISTINGS
module.exports.deleteListing = async (req, res) => {
  let { id } = req.params;
  let deletedListing = await Listing.findByIdAndDelete(id);
  console.log(deletedListing);
  res.redirect("/");
};
