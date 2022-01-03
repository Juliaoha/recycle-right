const drake = dragula([
  document.querySelector(".item-container"),
  document.querySelector("#recycling-bin"),
  document.querySelector("#landfill-bin"),
  document.querySelector("#organic-bin"),
  document.querySelector("#transfer-station"),
]);

drake.on("drop", (el, target, source, sibling) => {
  console.log("el: ", el);
  console.log("target: ", target);
  console.log("source: ", source);
  console.log("sibling: ", sibling);
});
