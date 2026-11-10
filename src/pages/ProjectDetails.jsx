import React from 'react';
import { useParams, Navigate } from 'react-router-dom';
import ELMSProject from '../projects/ELMSProject';
import RideShareProject from '../projects/RideShareProject';
import EmergencyRouteProject from '../projects/EmergencyRouteProject';
import BankingProject from '../projects/BankingProject';
import NotFound from './NotFound';

export default function ProjectDetails() {
  const { id } = useParams();

  switch (id) {
    case 'elms':
      return <ELMSProject />;
    case 'rideshare-connect':
      return <RideShareProject />;
    case 'ai-emergency-route-planning':
      return <EmergencyRouteProject />;
    case 'banking-credit-risk':
      return <BankingProject />;
    default:
      return <NotFound />;
  }
}

