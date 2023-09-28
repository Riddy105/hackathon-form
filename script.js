"use strict";
const addParticipantBtn = document.querySelector(".add-member");
const removeParticipantBtn = document.querySelector(".remove-participant");
const partcipantsContainer = document.querySelector(".participants-container");
// const addedParticipantsEl = document.querySelectorAll(".added-participants");

const partcipantsArray = [1];
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
addParticipantBtn.addEventListener("click", addParticipantHandler);
partcipantsContainer.addEventListener("click", removeParticipantHandler);
