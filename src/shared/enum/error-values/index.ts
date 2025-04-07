enum EValidationErrorValues {
    REQUIRED = 'Обязательное поле',
    INCORRECT_VALUE = 'Введены некорректные символы',
    EMAIL_NOT_FOUND = 'Пользователя с такой почтой не существует',
    EMAIL_NOT_UNIQUE = 'Пользователь с такой почтой уже зарегистрирован',
    USERNAME_NOT_UNIQUE = 'Этот никнейм уже занят Пожалуйста, выберите другой',
    PASSWORDS_UNMATCH = 'Введенные пароли не совпадают',
    PASSWORD_NOT_UNIQUE = 'Ваш пароль не может быть похож на старый',
    INCORRECT_CODE = 'Неверный код',
    NUMBER_OF_TOPICS = 'Выберите не менее трех тем',
    AUTH_MESSAGE = 'Неверный email или пароль'
}

export {
    EValidationErrorValues
}