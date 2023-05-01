    //README.md
    
   ## This is a API of Essential Oils.


This is an API to research essential oils, their health benifits and their uses. 

Here are the request methods. 

`/users` - GET
-Returns all users info

`/users`/:id - GET
-Returns a simgle user by id
- example response from `/users`/:id
            {
            "id": "4",
            "first_name": "Zachery",
            "last_name": "Norman",
            "email": "vitae.semper@icloud.ca",
            "phone": "(833) 413-3271"
            }



`/oils` - GET
-Returns all listed essential oils

`/oils`/:id - GET
-Returns a simgle essential oil by id
- example response from `/oils`/:id 


    "id": 1,
    "name": "Lavender",
    "usage_methods": [
      "Diffusion",
      "Topical",
      "Inhalation"
    ],
    "botanical_name": "Lavandula angustifolia",
    "description": "Lavender oil is extracted from the flowers of the lavender plant through steam distillation. It has a sweet, floral, and herbaceous aroma.",
    "benefits": [
      "Calming and relaxing",
      "Promotes restful sleep",
      "Soothes skin irritation"
      ]