import {writable} from 'svelte/store'

export const firstForm = writable({
    carBrand: '',
    zipCode: '',
})

export const secondForm = writable({
    firstName: '',
    lastName: '',
    carModel: '',
    firstRegistration: ''
});

export const errorPopup = writable(null);

export const brands = { // readonly
    carModels: ['Audi', 'BMW', 'Nissan'],
    zipCodes: [65000, 66000, 67000, 68000],
};
