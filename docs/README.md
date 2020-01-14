# Order Places

> Centralizes all places-related requests to the Checkout API

Any kind of places query or manipulation should be made through this component. This ensures that each interaction with the Checkout API happens in succession, avoiding concurrency issues. Additionally, most of the logic related to manipulating the format of places data should be made in this orchestrator to limit UI components to just render passed data in a direct way.
