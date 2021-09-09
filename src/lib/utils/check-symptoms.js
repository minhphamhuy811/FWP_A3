export default function checkSymptom(symptomObj) {
  let symptomENG = [
    "cough",
    "fever",
    "headache",
    "soreThroat",
    "stuffNose",
    "difficultyBreathing",
    "chestache",
    "muscleache",
    "ageusia",
    "anosmia",
    "nausea",
    "stomachache",
  ];
  let symptomVN = [];
  symptomENG.forEach((symptomKey) => {
    if (symptomObj[symptomKey] == true) {
      switch (symptomKey) {
        case "cough":
          symptomVN.push("Ho");
          break;
        case "headache":
          symptomVN.push("Đau đầu");
          break;
        case "soreThroat":
          symptomVN.push("Đau rát họng");
          break;
        case "stuffNose":
          symptomVN.push("Ngạt mũi");
          break;
        case "difficultyBreathing":
          symptomVN.push("Khó thở");
          break;
        case "chestache":
          symptomVN.push("Đau tức ngực");
          break;
        case "muscleache":
          symptomVN.push("Đau mỏi người/cơ");
          break;
        case "ageusia":
          symptomVN.push("Mất vị giác");
          break;
        case "anosmia":
          symptomVN.push("Mất khứu giác");
          break;
        case "nausea":
          symptomVN.push("Buồn nôn");
          break;
        case "stomachache":
          symptomVN.push("Đau bụng");
          break;
      }
    }
  });
  if (!symptomVN.length) {
    symptomVN.push("Không có");
  }
  return symptomVN;
}
