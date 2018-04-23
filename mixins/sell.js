
export default {
  computed: {
	technologies() {
		return this.$store.getters['listings/getTechnologies']
	}
  },
  data() {
    return {
      inputErrors: [],
      inputs: [],
      data: {},
    }
  },
  methods: {
    inputChangeHandler(value, index) {
      this.inputs[index].value = value
      this.inputs[index].touched = true
      this.check()
      this.validate(this.inputs[index].title, value, this.inputs[index].rules)
    },
    switch_page(page) {
    	this.beforePageSwitch()
    	if (this.validateAll())
        	this.$emit('switched', {page: page, context: this.data})
    },
    beforePageSwitch() {
    },
    check() {
    },
    validate(field, value, rules) {
      for (let i = 0; rules.length > i; i++) {
          switch(rules[i].name.toUpperCase()) {
            case 'REQUIRED':
              if(value.length == 0) 
                this.addError(`The ${field} cannot be empty`, field)
              else
                this.removeError(`The ${field} cannot be empty`)
            break;
            case 'MIN':
              if(value.length < rules[i].value) 
                  this.addError(`The ${field} must be at least ${rules[i].value} characters`, field)
              else
                this.removeError(`The ${field} must be at least ${rules[i].value} characters`)
            break;
            case 'MAX':
              if(value.length > rules[i].value) 
                  this.addError(`The ${field} must be more than ${rules[i].value} characters`, field)
              else
                this.removeError(`The ${field} must be more than ${rules[i].value} characters`)
            break;
            default:
            	return
          } 
      }
    },
    validateAll() {
      for (let i = 0; this.inputs.length > i; i++) {
        this.validate(this.inputs[i].title, this.inputs[i].value, this.inputs[i].rules)
      }
      return this.inputErrors.length == 0
    },
    addError(error, field) {
      this.inputErrors = this.inputErrors.filter(value => value.error !== error)
      this.inputErrors.push({error: error, field: field})
    },
    removeError(error) {
      this.inputErrors = this.inputErrors.filter(value => value.error !== error)
    },
    isError(index) {
      const error = this.inputErrors.find(value => value.field == this.inputs[index].title)
      return error !== undefined
    }
  }
}