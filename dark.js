const moonPath =
  "M143 250C143 388.071 250 500 250 500C111.929 500 0 388.071 0 250C0 111.929 111.929 0 250 0C250 0 143 111.929 143 250Z ";

const sunpath =
  "M500 250C500 388.071 388.071 500 250 500C111.929 500 0 388.071 0 250C0 111.929 111.929 0 250 0C388.071 0 500 111.929 500 250Z";

const darkMode = document.querySelector(".darkmode");

let toggle = false;

darkMode.addEventListener("click", () => {
  // setting timeline
  const timeline = anime.timeline({
    duration: 750,
    easing: "easeOutExpo",
  });
  // add to timeline
  timeline
    .add({
      targets: ".darkmode",
      translateX: toggle ? 0 : 100,
    })
    .add(
      {
        targets: ".sun",
        d: [{ value: toggle ? sunpath : moonPath }],
      },
      "-=600"
    )

    .add(
      {
        targets: ".darkmode",
        rotate: toggle ? 0 : 320,
      },
      "-=450"
    )
    .add(
      {
        targets: "section",
        backgroundColor: toggle ? "rgb(255,255,255)" : "rgb(2,2,2)",
        color: toggle ? "rgb(2,2,2)" : "rgb(255,255,255)",
      },
      "-=600"
    );
  // toggle switch to change it
  if (!toggle) {
    toggle = true;
  } else {
    toggle = false;
  }
});
