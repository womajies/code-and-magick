const getData = (onSuccess) => {
  fetch('https://23.javascript.pages.academy/code-and-magick/data')
    .then((response) => response.json())
    .then((wizards) => {
      onSuccess(wizards);
    });
};

const sendData = (onSuccess, onFail, body) => {
  fetch(
    'https://23.javascript.pages.academy/code-and-magick',
    {
      method: 'POST',
      body,
    },
  )
    .then((response) => {
      if (response.ok) {
        onSuccess();
      } else {
        onFail();
      }

      // throw new Error(`${response.status} - ${response.statusText}`);
    })
    .catch(() => {
      onFail();
    });
};

export {getData, sendData};
