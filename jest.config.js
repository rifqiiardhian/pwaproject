module.exports = {
    moduleNameMapper: {
        '^~/(.*)$': '<rootDir>/$1',
        '^@/(.*)$': '<rootDir>/$1',
        '^vue$': 'vue/dist/vue.common.js'
    },
    moduleFileExtensions: ['js', 'vue', 'json'],
    transform: {
        '^.+.js$': '<rootDir>/node_modules/babel-jest',
        '^.+.vue$': '<rootDir>/node_modules/vue-jest'
    }
}