var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
    res.render("index", { title: "Home" });
    alert("JS is working!");
});

router.get("/about", (req, res, next) => {
    res.render("about", {
        title: "About",
    });
});

router.get("/services", (req, res, next) => {
    res.render("services", {
        title: "Services",
    });
});

router.get("/services-video", (req, res, next) => {
    res.render("services-video", {
        title: "Video Production Services",
    });
});

router.get("/services-event", (req, res, next) => {
    res.render("services-event", {
        title: "Event Videography",
    });
});

router.get("/services-corporate", (req, res, next) => {
    res.render("services-corporate", {
        title: "Corporate/Training Videos",
    });
});

router.get("/services-social", (req, res, next) => {
    res.render("services-social", {
        title: "Social Media",
    });
});

router.get("/people", (req, res, next) => {
    res.render("people", {
        title: "People",
    });
});

router.get("/palesa", (req, res, next) => {
    res.render("palesa", {
        title: "Palesa",
    });
});

router.get("/contact-us", (req, res, next) => {
    res.render("contact-us", {
        title: "Contact Us",
    });
});

router.get("/previous-work", (req, res, next) => {
    res.render("previous-work", {
        title: "Previous Work",
    });
});

module.exports = router;
