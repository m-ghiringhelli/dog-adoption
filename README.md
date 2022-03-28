# Plan

I) Views
    A) home -displays a list of dogs
        1) Components
            a) Header
            b) DogList
        2) State
            a) list of dog objects - array
            b) error
    B) dog detail -/dogs/:id -displays dog detail
        1) Components
            a) Header
            b) DogDetail
        2) State
            a) one dog object - object
            b) error
    C) admin -/admin -create a dog form
        1) Components
            a) Header
            b) DogForm
        2) State
            a) dog object created by form data? - object
    D) update -/dogs/:id/edit -same form but with default data
        1) Components
            a) Header
            b) DogForm
        2) State
            a) dog object but with initial value that matches id of current dog page
II) Supabase
    A) Fetch utils
        1) Fetch all dogs
        2) add dog row