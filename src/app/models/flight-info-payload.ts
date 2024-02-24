// src/app/models/flight-info-payload.ts

export interface FlightInfoPayload {
    airline: string;
    arrivalDate: string;
    arrivalTime: string;
    flightNumber: string;
    numOfGuests: number;
    comments?: string;
  }
  