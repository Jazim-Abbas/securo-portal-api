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

### to get question from specific step

- question/get-for-specificstep :post

```
{
    stepId:
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

### to add answer for step 2

- answer/add-for-step2 :post

```
{
    stepId:
    answer1:
    questionId1:
    answer2:
    questionId2:
    answer3:
    questionId3:
    answer4:
    questionId4:
    answer5:
    questionId5:
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
