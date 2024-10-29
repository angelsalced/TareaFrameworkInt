Feature: Registro de citas

  @probando
  Scenario Outline: Login with credentials
    Given Im logged in
    And I select the contact
    And I should create the appointment with <Name> , <Surname> , <Phone> , <Email> , <Date> , <Time>
    Examples:
      | Name               | Surname              | Phone                                       | Email              | Date | Time |
      | {{internet.email}} | {{person.firstName}} | {{phone.number('+52-55-##-##-##-##')}} | {{internet.email}} | algo | algo |



