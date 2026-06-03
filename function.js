// Function to calculate carbon footprint and display results
function calculateFootprint() {

  let transport = parseInt(document.getElementById("transport").value);
  let electricity = parseInt(document.getElementById("electricity").value);
  let diet = parseInt(document.getElementById("diet").value);

  let total = transport + electricity + diet;

  let result = "";

  let head1 = "";
  let tip1 = "";
  let tip2 = "";
  let tip3 = "";

  let head2 = "";
  let elec1 = "";
  let elec2 = "";
  let elec3 = "";

  let head3 = "";
  let diet1 = "";
  let diet2 = "";
  let diet3 = "";

  if (total <= 4) {

    result = "🌱 Low Carbon Footprint";

    head1 = "✅ Great Job!";
    tip1 = "Keep using eco-friendly habits.";
    tip2 = "Continue saving electricity.";
    tip3 = "Support sustainable living.";

  } else if (total <= 7) {

    result = "⚠️ Moderate Carbon Footprint";

    head1 = "♻️ Improvement Tips";
    tip1 = "Use public transportation more often.";
    tip2 = "Reduce unnecessary electricity usage.";
    tip3 = "Try eating more plant-based meals.";

  } else {

    result = "🔥 High Carbon Footprint";

    head1 = "🚶 Transportation Tips";
    tip1 = "Walk or bike for short distances.";
    tip2 = "Reduce meat consumption.";
    tip3 = "Use public transportation.";

    head2 = "💡 Save Electricity";
    elec1 = "Turn off lights when not in use.";
    elec2 = "Unplug unused devices.";
    elec3 = "Use energy-efficient appliances.";

    head3 = "🍽️ Diet Tips";
    diet1 = "Choose locally-sourced and seasonal foods.";
    diet2 = "Reduce food waste by planning meals.";
    diet3 = "Consider the environmental impact of your food choices.";
  }

  document.getElementById("result").innerHTML = result;

  document.getElementById("head1").innerHTML = head1;
  document.getElementById("tip1").innerHTML = tip1;
  document.getElementById("tip2").innerHTML = tip2;
  document.getElementById("tip3").innerHTML = tip3;

  document.getElementById("head2").innerHTML = head2;
  document.getElementById("elec1").innerHTML = elec1;
  document.getElementById("elec2").innerHTML = elec2;
  document.getElementById("elec3").innerHTML = elec3;

  document.getElementById("head3").innerHTML = head3;
  document.getElementById("diet1").innerHTML = diet1;
  document.getElementById("diet2").innerHTML = diet2;
  document.getElementById("diet3").innerHTML = diet3;

  //function to scroll to tips section after calculation
   setTimeout(() => {
  document.getElementById("tipsSection").scrollIntoView({
      behavior: "smooth",
      block: "start"
    });
  }, 300);
}

// Function to highlight active section in navigation
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav a[href^='#']");

window.addEventListener("scroll", () => {
  let current = "";

  sections.forEach((section) => {
    const sectionTop = section.offsetTop - 100;
    const sectionHeight = section.clientHeight;

    if (window.scrollY >= sectionTop) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach((link) => {
    link.classList.remove("active");

    if (link.getAttribute("href") === "#" + current) {
      link.classList.add("active");
    }
  });
});




