import React, { createContext, useContext, useState, useEffect } from "react";
import { clearAuth, getAuth, setAuth } from "../utils/storage";

const AuthContext = createContext(null);

export  const Auth