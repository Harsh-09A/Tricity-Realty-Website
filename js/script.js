// Toggle Content Button
function toggleContent(dotsId, moreTextId, btnId) {
  var dots = document.getElementById(dotsId);
  var moreText = document.getElementById(moreTextId);
  var btnText = document.getElementById(btnId);

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Read More ...";
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Read Less";
    moreText.style.display = "inline";
  }
}

const changeMap = (locationName) => {
  switch (locationName) {
    case "NATRAJ":
      document.getElementById("location_map").src =
        "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15085.618814553633!2d72.904605!3d19.045936!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c735149551dd%3A0xf59cd6c55f9c70ad!2sTricity%20Natraj!5e0!3m2!1sen!2sin!4v1729596310278!5m2!1sen!2sin";
      break;
    case "HERITAGE":
      document.getElementById("location_map").src =
        "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15091.372677469515!2d73.1218672!3d18.9825324!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7e9feea5e840f%3A0x47719f5e81198816!2sTricity%20Heritage!5e0!3m2!1sen!2sin!4v1729599452343!5m2!1sen!2sin";
      break;
    case "CREST":
      document.getElementById("location_map").src =
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3772.771469637789!2d73.12173967466299!3d18.985697554802343!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7e93af8da2d29%3A0x937a4084a37b361b!2sTricity%20Crest!5e0!3m2!1sen!2sin!4v1729599861783!5m2!1sen!2sin";
      break;
    case "BLISS":
      document.getElementById("location_map").src =
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3773.2641615678485!2d73.02433547710969!3d18.96393760965498!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c399b8f206b9%3A0xb7fed2d21d7c9dbe!2sTricity%20Bliss!5e0!3m2!1sen!2sin!4v1729599918767!5m2!1sen!2sin";
      break;
    case "BAYVIEW":
      document.getElementById("location_map").src =
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3771.478394448465!2d73.09363487466435!3d19.04269285301839!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7e9a3933ef4e3%3A0xceb80b19e64315ef!2sTricity%20Bayview!5e0!3m2!1sen!2sin!4v1729599973127!5m2!1sen!2sin";
      break;
    case "AURA":
      document.getElementById("location_map").src =
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3771.4517179357194!2d73.09676977466445!3d19.043866952981563!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7e944a86241fd%3A0xffca8dc1f076565e!2sTricity%20Aura!5e0!3m2!1sen!2sin!4v1729600022298!5m2!1sen!2sin";
      break;
    case "ASPIRE":
      document.getElementById("location_map").src =
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3770.8607915222724!2d73.081953574665!3d19.06985725216643!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c18088cdafc3%3A0xb40e1b1776e43328!2sTricity%20Aspire!5e0!3m2!1sen!2sin!4v1729600065906!5m2!1sen!2sin";
      break;
    case "MONTVIEW":
      document.getElementById("location_map").src =
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3771.046747693441!2d73.00626567466482!3d19.06168215242297!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c1d0911289d7%3A0xb240542ed3084688!2sTricity%20Montview!5e0!3m2!1sen!2sin!4v1729600117618!5m2!1sen!2sin";
      break;

    default:
      break;
  }
};
