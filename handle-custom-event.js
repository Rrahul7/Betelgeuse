console.log('custom script loaded')
window.addEventListener(
        "message",
        function (event1) {
          try {
            console.log(event1);
            var event = JSON.parse(event1.data);
            if (
              event.event_code == "custom-event" &&
              event.data.code == "close-bot"
            ) {
              window.YellowMessengerPlugin.closeBot()
            }
          } catch (error) {
            console.log(error, "error-customScript");
          }
        },
        false
      );
