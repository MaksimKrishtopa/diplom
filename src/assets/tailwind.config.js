module.exports = {
    content: ['./src/**/*.{js,ts,tsx}',
    './pages/**/*.{html,js,tsx}',
    '././index.html'],
    theme: {
        fontSize: {
            58: '58px',
        },
        extend: {
            fontFamily: {
                poppins: ['Poppins', 'sans-serif'],
            },
            colors: {
                blue: '#5687BBF2',
                light: '#D9D9D9F2',
                white: '#5687BBF2',
            },

        },
    },
};