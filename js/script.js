// Copyright (c) 2024 Mohammed EL-hayek All rights reserved
//
// Created by: Mohammed
// Created on: Apr 2024
// This file contains the JS functions for index.html

'use strict'
/**
 * This function calculates the volume of a pyramid
 */
function calculate() {
  // input
  const f = parseInt(document.getElementById('Fahrenheit').value)

  // process
  const c = (f - 32) * 5 / 9

  // output
  document.getElementById('Celsius').innerHTML = `The Temperature is: ${c.toFixed(2)} °C`
}
