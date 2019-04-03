const inputs = document.querySelectorAll(".controls input");

function handleUpdate() {
  // "dataset" all the customs attributes
  const suffix = this.dataset.sizing || "";
  document.documentElement.style.setProperty(
    `--${this.name}`,
    this.value + suffix
  );
}

inputs.forEach(input => input.addEventListener("change", handleUpdate));
