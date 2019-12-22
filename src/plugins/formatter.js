const capitalize = str => str.charAt(0).toUpperCase() + str.slice(1);

const capitalizeString = (inputString) => {
  let words = inputString.toString().split(' ');

  words = words.map(word => capitalize(word.toLowerCase()));

  return words.join(' ');
};

const formatPlanName = inputString => capitalizeString(inputString);

const formatSponsorName = inputString => capitalizeString(inputString);

const format = rawData => new Promise((resolve, reject) => {
  try {
    const res = rawData.map(item => ({
      ackId: item.ACK_ID,
      planName: formatPlanName(item.PLAN_NAME),
      sponsorDfeName: formatSponsorName(item.SPONSOR_DFE_NAME),
    }));
    resolve(res);
  } catch (error) {
    reject(error);
  }
});

export default { format };
