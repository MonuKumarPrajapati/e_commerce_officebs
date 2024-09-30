const  otpInputs = document.querySelectorAll('.form-control')

    otpInputs.forEach((input, index) => {
        input.addEventListener('input', () => {
            if (input.value.length === 1) {
                const nextInput = otpInputs[index + 1];
                if (nextInput) {
                    nextInput.focus();
                }
            }
        })
    })




 