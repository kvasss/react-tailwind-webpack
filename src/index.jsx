import { createRoot } from "react-dom/client";
import * as React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";

import './style.css';
import './scss/index.scss';

createRoot(document.getElementById("header")).render(<Header />);

createRoot(document.getElementById("footer")).render(<Footer />);
