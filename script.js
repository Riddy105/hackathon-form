"use strict";
const addParticipantBtn = document.querySelector(".add-member");
const removeParticipantBtn = document.querySelector(".remove-participant");
const partcipantsContainer = document.querySelector(".participants-container");
const registerBtn = document.querySelector(".register-btn");
const overlay = document.querySelector(".overlay");
const formEl = document.querySelector("form");

const firstNameInput = document.getElementById("first-name");
let participantNumber = 0;
const memberForm = `
<div class='input-section added-participants'>
<div class="individual-input full-name">
<label for="full-name"
  >Full Name <span class="asterik">*</span>
</label>
<input type="text" required id="full-name" />
</div>
<div class="individual-input email">
<label for="email">Email <span class="asterik">*</span> </label>
<input type="email" required id="email" />
</div>
<button class='remove-participant'>Remove Participant</button>
</div>
`;
const addParticipantHandler = (e) => {
  console.log(firstNameInput.validity);

  participantNumber = participantNumber + 1;
  addParticipantBtn.disabled = participantNumber === 5;
  partcipantsContainer.insertAdjacentHTML(
    "beforeend",
    `
    <div class='input-section participant' id=participant-${participantNumber}>
    <div class="individual-input full-name">
    <label for="full-name"
      >Full Name <span class="asterik">*</span>
    </label>
    <input type="text" required id="full-name" />
    </div>
    <div class="individual-input email">
    <label for="email">Email <span class="asterik">*</span> </label>
    <input type="email" required id="email" />
    </div>
    <button class='remove-participant' id=${participantNumber}>Remove Participant</button>
    </div>
    `
  );
};
const removeParticipantHandler = (e) => {
  if (e.target.classList.contains("remove-participant")) {
    const parentDiv = e.target.closest(".participant");
    parentDiv.remove();
    participantNumber = participantNumber - 1;
    addParticipantBtn.disabled = participantNumber === 5;
  }
};

const showForm = (e) => {
  formEl.style.display = "block";
  overlay.style.display = "block";
};
const hideForm = (e) => {
  formEl.style.display = "none";
  overlay.style.display = "none";
};
addParticipantBtn.addEventListener("click", addParticipantHandler);
partcipantsContainer.addEventListener("click", removeParticipantHandler);
registerBtn.addEventListener("click", showForm);
overlay.addEventListener("click", hideForm);
