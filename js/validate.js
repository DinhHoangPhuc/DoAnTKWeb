function Validator(option) {
  const formElement = document.querySelector(option.form);

  var selectorRules = {};

  function validate(inputElement, element) {
    const errorElement = inputElement.parentElement.querySelector(
      option.errorSelector
    );
    var errorMessage;

    // console.log(element.selector)
    const rules = selectorRules[element.selector];
    // console.log(rules)
    // rules.forEach((item) => {
    //   errorMessage = item(inputElement.value)
    //   if(errorMessage) {
    //     return;
    //   }
    // })
    for (var item of rules) {
      errorMessage = item(inputElement.value);
      if (errorMessage) {
        break;
      }
    }

    if (errorMessage) {
      inputElement.parentElement.classList.add("form_error");
      errorElement.innerText = errorMessage;
    } else {
      inputElement.parentElement.classList.remove("form_error");
      errorElement.innerText = "";
    }
  }

  function oninputHandler(inputElement) {
    const errorElement = inputElement.parentElement.querySelector(
      option.errorSelector
    );

    inputElement.parentElement.classList.remove("form_error");
    errorElement.innerText = "";
  }

  if (formElement) {
    formElement.onsubmit = (e) => {
      e.preventDefault();

      var isFormValid = true;

      option.rules.forEach((element) => {
        const inputElement = formElement.querySelector(element.selector);
        var isVlaid = validate(inputElement, element);
        if (isVlaid) {
          isFormValid = false;
        }
      });

      if (isFormValid) {
        option.onSubmit();
      }
    };

    option.rules.forEach((element) => {
      const inputElement = formElement.querySelector(element.selector);

      if (Array.isArray(selectorRules[element.selector])) {
        selectorRules[element.selector].push(element.test);
      } else {
        selectorRules[element.selector] = [element.test];
      }

      if (inputElement) {
        inputElement.onblur = function () {
          validate(inputElement, element);
          // option.onSubmit();
        };

        inputElement.oninput = function () {
          oninputHandler(inputElement);
        };
      }
    });

    console.log(selectorRules);
  }
}

Validator.IsRequired = function (element) {
  return {
    selector: element,
    test: function (value) {
      if (value.trim()) {
        return undefined;
      } else {
        return "Vui lòng nhập ô này !";
      }
    },
  };
};

Validator.IsEmail = function (element) {
  return {
    selector: element,
    test: function (value) {
      const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
      if (regex.test(value)) {
        return undefined;
      } else {
        return "Email không đúng định dạng !";
      }
    },
  };
};

Validator.MinLength = function (element, min) {
  return {
    selector: element,
    test: function (value) {
      if (value.length >= min) {
        return undefined;
      } else {
        return `Ô này tối thiểu ${min} kí tự`;
      }
    },
  };
};

Validator.IsConfirm = function (element, getCofirmValue, message) {
  return {
    selector: element,
    test: function (value) {
      if (value === getCofirmValue()) {
        return undefined;
      } else {
        return message || "Gia tri xac nhan lai khong chinh xac";
      }
    },
  };
};
