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

- user/profile :post

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

- question/add-for-step :post

```
{
    questionTitle:
    stepId:
}
```

### to add a new question for step 2

- question/add-for-step :post

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

### to get a service for specific step

- service/get :post

```
{
    stepId:
}
```
