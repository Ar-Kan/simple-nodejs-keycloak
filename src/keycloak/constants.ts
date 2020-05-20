import { MemoryStore } from 'express-session';
import * as Keycloak from 'keycloak-connect';
import * as keycloak_config from './keycloak.json';

export const memory_store = new MemoryStore();
export const keycloak = new Keycloak({ store: memory_store }, keycloak_config);
