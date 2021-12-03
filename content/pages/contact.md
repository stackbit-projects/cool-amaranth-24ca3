---
title: Nous contacter
form_id: contactForm
form_action: /success
form_fields:
  - input_type: text
    name: name
    label: Nom
    default_value: Votre nom
    is_required: true
  - input_type: email
    name: email
    label: Email
    default_value: Votre adresse email
    is_required: true
  - input_type: select
    name: subject
    label: Objet
    default_value: Sélectionner
    options:
      - Error on the site
      - Sponsorship
      - Other
  - input_type: textarea
    name: message
    label: Message
    default_value: Votre message
  - input_type: checkbox
    name: consent
    label: >-
      En remplissant ce formulaire, vous acceptez de transmettre vos
      informations et d'être contactés.
submit_label: Envoyer
seo:
  title: Get in Touch
  description: This is the contact page
  extra:
    - name: 'og:type'
      value: website
      keyName: property
    - name: 'og:title'
      value: Get in Touch
      keyName: property
    - name: 'og:description'
      value: This is the contact page
      keyName: property
    - name: 'og:image'
      value: images/contact.jpg
      keyName: property
      relativeUrl: true
    - name: 'twitter:card'
      value: summary_large_image
    - name: 'twitter:title'
      value: Get in Touch
    - name: 'twitter:description'
      value: This is the contact page
    - name: 'twitter:image'
      value: images/contact.jpg
      relativeUrl: true
layout: contact
img_path: /images/Plan de travail – 5-0b510cdc.png
---
Veuillez remplir vos informations pour nous contacter
