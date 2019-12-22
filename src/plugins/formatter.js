const capitalize = str => str.charAt(0).toUpperCase() + str.slice(1);

const capitalizeString = (inputString) => {
  let words = inputString.toString().split(' ');

  words = words.map(word => capitalize(word.toLowerCase()));

  return words.join(' ');
};

const formatPlanName = inputString => capitalizeString(inputString);

const formatSponsorName = inputString => capitalizeString(inputString);

const format = rawData => new Promise((resolve) => {
  const formatted = rawData.map(item => ({
    ackId: item.ackId,
    planName: formatPlanName(item.planName),
    sponsorDfeName: formatSponsorName(item.sponsorDfeName),
  }));
  resolve(formatted);
});

export default { format };
