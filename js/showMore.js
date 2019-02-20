const Toolbox = {
  addClass: function(mocont, newClass) {
    mocont.classList.add(newClass);
  },
  removeClass: function(mocont, newClass) {
    mocont.classList.remove(newClass);
  },
  showMore: function(button, mocont) {
    button.addEventListener("click", event => {
      const buttonText = event.target.textContent.toLowerCase(); //target text inside a button
      event.preventDefault(); //prevent default behavour of the button
      if (buttonText == "czytaj więcej") {
        this.removeClass(mocont, "closed");
        this.addClass(mocont, "open");
        button.textContent = "mniej"; //change text content of the button
      } else {
        this.removeClass(mocont, "open");
        this.addClass(mocont, "closed");
        button.textContent = "czytaj więcej"; //change text content of the button

      }
    });
  }
}
const TargetSight = {
  showMore: function(allButtonsClass) {
    const allButtons = document.querySelectorAll(allButtonsClass); //contain all button elements in allButtons variable
    allButtons.forEach(button => {
      const targetedContent = button.previousElementSibling;
      Toolbox.showMore(button, targetedContent);
    })
  }
}

TargetSight.showMore(".more");
