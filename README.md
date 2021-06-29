# Securo Portal RestApi

## Routes for User

### to register a new user

- user/register : post

```
{
    name:
    email:
    password:
}
```

### to verify a new user

- user/verify : post

```
{
    verificationCode:
}
```

### to login an existing user

- user/login :post

```
{
    email:
    password:
}
```

### to view the profile of an authenticated user

- user/profile :get

### to view the profile of all users

- user/all :get

## Routes for steps

### to add a new step

- step/add :post

```
{
    stepTitle:
}
```

### to get all steps

- step/get-all :get

### to get a single step

- step/get-single

```
{
    stepId:
}
```

## Routes for Questions

### to add a new question for step 1

- question/add-for-step1 :post

```
{
    questionTitle:
    stepId:
}
```

### to add a new question for step 2

- question/add-for-step2 :post

```
{
    questionTitle:
    questionDescription:
    stepId:
}
```

### to add a new question for section

- question/add-for-section :post

```
{
    questionTitle:
    questionDescription:
    sectionId:
}
```

### to update/edit a question

- question/update :post

```
{
    questionId:
    questionTitle: (if required)
    questionDescription: ((if required))
}
```

### to get question from specific step

- question/get-for-specificstep :post

```
{
    stepId:
}
```

### to get question from specific section

- question/get-for-section :post

```
{
    sectionId:
}
```

## Routes for services

### to add a new service

- service/add :post

```
{
    serviceTitle:
    stepId:
}
```

### to get a service for a specific step

- service/get :post

```
{
    stepId:
}
```

## Routes for answers

### to add answer for step

- answer/add-for-step :post

```
[
    {
        userId:
        stepId:
        answer:
        questionId:
    },
    {
        userId:
        stepId:
        answer:
        questionId:
    }
    and so on depends on length of question
]
```

### to add answer for section

- answer/add-for-section :post

```
[
    {
        userId:
        sectionId:
        answer:
        questionId:
    },
    {
        userId:
        sectionId:
        answer:
        questionId:
    }
    and so on depends on length of question
]
```

### to find all answers for a specificuser

- answer/get :post

```
{
    userId:
}
```

## Routes for sections

### to add a new section

- section/add :post

```
{
    sectionTitle:
    serviceId:
}
```

### to get a section for a specific service

- section/get :post

```
{
    serviceId:
}
```

### to get all sections

- section/get-all :get

## Routes to upload image

### Routes to upload image for section and step

- answer/upload-image :post

```
{
    image: {
        type: form-data

    },
    questionId:
    sectionId: (only for section)
    stepId: (only for step)
}
```

### Routes to upload multiple image for section

- answer/upload-multiple :post

```
{
    image: {
        type: form-data

    },
    image: {
        type: form-data

    },
    image: {
        type: form-data

    },
    questionId:
    sectionId:
}
```
