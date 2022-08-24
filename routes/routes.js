var express = require("express");
var mongoose = require("mongoose");
var path = require("path");

var router = express.Router();
var Team = require("../models/team");

router.get("/", function(req, res) {
  res.render("attendance");
});

router.post("/submit", function(req, res) {
  //some code here
  var aakash = req.body.aakash;
  var aarushi = req.body.aarushi;
  var aaryaman = req.body.aaryaman;
  var aarzoo = req.body.aarzoo;
  var aastha = req.body.aastha;
  var aayushi = req.body.aayushi;
  var abhay_goyal = req.body.abhay_goyal;
  var abhay_singh = req.body.abhay_singh;
  var abhinav = req.body.abhinav;
  var abhishek = req.body.abhishek;
  var aditi_baranwal = req.body.aditi_baranwal;
  var aditi_puri = req.body.aditi_puri;
  var aditya = req.body.aditya;
  var akhil = req.body.akhil;
  var akshay = req.body.akshay;
  var akshita = req.body.akshita;
  var amol = req.body.amol;
  var ana = req.body.ana;
  var ananti = req.body.ananti;
  var anika = req.body.anika;
  var anmol_arora = req.body.anmol_arora;
  var anmol_gupta = req.body.anmol_gupta;
  var anubhav = req.body.anubhav;
  var anupama = req.body.anupama;
  var anushka_aggarwal = req.body.anushka_aggarwal;
  var anushka_chandra = req.body.anushka_chandra;
  var anushka_khera = req.body.anushka_khera;
  var anvi = req.body.anvi;
  var arnav = req.body.arnav;
  var arpanjit = req.body.arpanjit;
  var arpit = req.body.arpit;
  var aryan = req.body.aryan;
  var ayaan = req.body.ayaan;
  var ayush_chandra = req.body.ayush_chandra;
  var ayush_kulshrestha = req.body.ayush_kulshrestha;
  var barleen = req.body.barleen;
  var bhavya = req.body.bhavya;
  var bhomik = req.body.bhomik;
  var bhushan = req.body.bhushan;
  var chinmay = req.body.chinmay;
  var chiranjeev = req.body.chiranjeev;
  var devansh = req.body.devansh;
  var dhruv = req.body.dhruv;
  var divit = req.body.divit;
  var garv = req.body.garv;
  var gauravi = req.body.gauravi;
  var gunish = req.body.gunish;
  var hargun = req.body.hargun;
  var ishita = req.body.ishita;
  var jappreet = req.body.jappreet;
  var jaskarandeep = req.body.jaskarandeep;
  var jaskirat = req.body.jaskirat;
  var jasmeen = req.body.jasmeen;
  var kaavya = req.body.kaavya;
  var kartik_arora = req.body.kartik_arora;
  var kartik_gupta = req.body.kartik_gupta;
  var kashish = req.body.kashish;
  var kavitash = req.body.kavitash;
  var khushal = req.body.khushal;
  var kritika = req.body.kritika;
  var kuber = req.body.kuber;
  var kushal = req.body.kushal;
  var madhav = req.body.madhav;
  var mahek = req.body.mahek;
  var mahin = req.body.mahin;
  var manan_munjal = req.body.manan_munjal;
  var manan_negi = req.body.manan_negi;
  var mandeep = req.body.mandeep;
  var mayukh = req.body.mayukh;
  var mehak = req.body.mehak;
  var mukund = req.body.mukund;
  var nikheel = req.body.nikheel;
  var nikhil = req.body.nikhil;
  var nikita = req.body.nikita;
  var nimish = req.body.nimish;
  var nishchay = req.body.nishchay;
  var oshita = req.body.oshita;
  var palak = req.body.palak;
  var paras = req.body.paras;
  var payas = req.body.payas;
  var prachi_mangewala = req.body.prachi_mangewala;
  var prachi_singhroha = req.body.prachi_singhroha;
  var preetinder = req.body.preetinder;
  var pulkit = req.body.pulkit;
  var raghav_goel = req.body.raghav_goel;
  var raghav_virmani = req.body.raghav_virmani;
  var rahul = req.body.rahul;
  var rajbir = req.body.rajbir;
  var risham = req.body.risham;
  var ritham = req.body.ritham;
  var rohit = req.body.rohit;
  var ruhi = req.body.ruhi;
  var rushil = req.body.rushil;
  var saatvik = req.body.saatvik;
  var sahil = req.body.sahil;
  var saloni = req.body.saloni;
  var sanchit = req.body.sanchit;
  var sankalp = req.body.sankalp;
  var shantanu = req.body.shantanu;
  var shivani = req.body.shivani;
  var shourya = req.body.shourya;
  var shrey = req.body.shrey;
  var shreya = req.body.shreya;
  var shreyas = req.body.shreyas;
  var shruti = req.body.shruti;
  var shruti_singh = req.body.shruti_singh;
  var shubham_khanna = req.body.shubham_khanna;
  var shubham_sahni = req.body.shubham_sahni;
  var siddhant = req.body.siddhant;
  var simranjeet = req.body.simranjeet;
  var soomo = req.body.soomo;
  var sparsh = req.body.sparsh;
  var tanmay = req.body.tanmay;
  var tarandeep = req.body.tarandeep;
  var tushar = req.body.tushar;
  var twinkle = req.body.twinkle;
  var udbhav = req.body.udbhav;
  var vaishnav = req.body.vaishnav;
  var vasundhra = req.body.vasundhra;
  var vatsal = req.body.vatsal;
  var vineet = req.body.vineet;
  var yash_dhawan = req.body.yash_dhawan;
  var yash_kapur = req.body.yash_kapur;
  var yashi = req.body.yashi;
  var yuvraj = req.body.yuvraj;
  
  var newAtd = { AakashSharma: aakash, 
    Aarushi: aarushi, 
    AaryamanThakur: aaryaman, 
    AarzooSharma: aarzoo, 
    AasthaSinghal: aastha, 
    AayushiChaudhry: aayushi, 
    AbhayGoyal: abhay_goyal, 
    Abhaysingh: abhay_singh, 
    AbhinavSinha: abhinav, 
    AbhishekSharma: abhishek, 
    AditiBaranwal: aditi_baranwal, 
    AditiPuri: aditi_puri, 
    AdityaGoel: aditya, 
    Akhilgupta: akhil, 
    AkshayKhandelwal: akshay, 
    AkshitaSharma: akshita, 
    AmolVyas: amol, 
    AnaSharma: ana, 
    Ananti: ananti, 
    AnikaShukla: anika, 
    AnmolArora: anmol_arora, 
    AnmolGupta: anmol_gupta, 
    AnubhavGoyal: anubhav, 
    Anupama: anupama, 
    AnushkaAggarwal: anushka_aggarwal, 
    AnushkaChandra: anushka_chandra, 
    AnushkaKhera: anushka_khera, 
    AnviChopra: anvi, 
    ArnavMishra: arnav, 
    ArpanjitSinghMalhi: arpanjit, 
    ArpitMalik: arpit, 
    AryanLamba: aryan, 
    AyaanAhmedKhan: ayaan, 
    AyushChandra: ayush_chandra, 
    AyushKulshrestha: ayush_kulshrestha, 
    Barleenkaur: barleen, 
    BhavyaSatija: bhavya, 
    BhomikSingh: bhomik, 
    BhushanBhagchandani: bhushan, 
    ChinmayPaliwal: chinmay, 
    Chiranjeev: chiranjeev, 
    DevanshGarg: devansh, 
    Dhruvsharma: dhruv, 
    DivitJain: divit, 
    GarvBareja: garv, 
    GauraviRajwanshi: gauravi, 
    Gunishkumar: gunish, 
    HargunSinghLogani: hargun, 
    Ishitathakur: ishita, 
    JappreetKaur: jappreet, 
    JaskarandeepSaini: jaskarandeep, 
    Jaskiratsingh: jaskirat, 
    Jasmeenkaur: jasmeen, 
    KaavyaVerma: kaavya, 
    kartikarora: kartik_arora, 
    KartikGupta: kartik_gupta, 
    KashishGoyal: kashish, 
    Kavitash: kavitash, 
    KhushalGarg: khushal, 
    KritikaNanda: kritika, 
    KuberMehra: kuber, 
    KushalSahni: kushal, 
    MadhavPande: madhav, 
    MahekKhowala: mahek, 
    MahinGarg: mahin, 
    MananMunjal: manan_munjal, 
    MananNegi: manan_negi, 
    MandeepGoyal: mandeep, 
    MayukhSharma: mayukh, 
    MehakSharma: mehak, 
    MukundGupta: mukund, 
    NikheelJain: nikheel, 
    NikhilSingla: nikhil, 
    Nikita: nikita, 
    Nimishshangle: nimish, 
    NishchayJain: nishchay, 
    OshitaSingh: oshita, 
    PalakBahl: palak, 
    ParasMaini: paras, 
    PayasJain: payas, 
    PrachiMangewala: prachi_mangewala, 
    PrachiSinghroha: prachi_singhroha, 
    Preetindersinghbajaj: preetinder, 
    Pulkitkohli: pulkit, 
    Raghavgoel: raghav_goel, 
    RaghavVirmani: raghav_virmani, 
    RahulMishra: rahul, 
    RAJBIRSINGHKAURA: rajbir, 
    RishamArora: risham, 
    Ritham: ritham, 
    RohitUpreti: rohit, 
    RuhiGoyal: ruhi, 
    RushilMittal: rushil, 
    Saatvikgarg: saatvik, 
    Sahil: sahil, 
    SaloniBali: saloni, 
    SanchitGoyal: sanchit, 
    SankalpSharma: sankalp, 
    ShantanuDev: shantanu, 
    ShivaniSharma: shivani, 
    ShouryaGupta: shourya, 
    ShreyGupta: shrey, 
    ShreyaGupta: shreya, 
    ShreyasDubey: shreyas, 
    Shruti: shruti, 
    ShrutiSingh: shruti_singh, 
    Shubhamkhanna: shubham_khanna, 
    ShubhamSahni: shubham_sahni, 
    SiddhantJain: siddhant, 
    SimranjeetKaur: simranjeet, 
    SoomoJyotibanerjee: soomo, 
    Sparshgulati: sparsh, 
    TanmayChakravorty: tanmay, 
    Tarandeepkour: tarandeep, 
    Tushargoyal: tushar, 
    Twinkle: twinkle, 
    UdbhavSomani: udbhav, 
    Vaishnavgautam: vaishnav, 
    VasundhraDatt: vasundhra, 
    Vatsalsoni: vatsal, 
    VineetUpadhyay: vineet, 
    YashDhawan: yash_dhawan, 
    YashKapur: yash_kapur, 
    YashiMishra: yashi, 
    YuvrajSingh: yuvraj };
  Team.create(newAtd, function(err, newattendance) {
    if (err) {
      console.log(err);
    } else {
      console.log(newattendance);
      res.redirect("/");
    }
  });
  //after adding to db
  // req.flash("success","Attendance Submitted!");
});

router.get("/edit", function(req, res) {
  Team.find({}, function(err, allAttendance) {
    if (err) {
      console.log(err);
    } else {
      res.render("edit", { attendance: allAttendance });
    }
  });
});

router.get("/view", function(req, res) {
  Team.find({}, function(err, allAttendance) {
    if (err) {
      console.log(err);
    } else {
      res.render("view", { attendance: allAttendance });
    }
  });
});

router.put("/:id", async function(req, res) {
  console.log(req.params.id);
  const updated = await Team.findByIdAndUpdate(
    req.params.id,
    req.body,
    function(err, updatedatt) {
      if (!err) {
        res.redirect("/edit");
      } else {
        console.log("error");
      }
    }
  );
  console.log(updated);
});

module.exports = router;
