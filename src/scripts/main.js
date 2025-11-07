'use strict';

const employeeList = document.querySelector('ul');

function getSalaryValue(element) {
  const salaryString = element.dataset.salary;
  const cleanSalary = salaryString.replace(/\$|,/g, '');

  return Number(cleanSalary);
}

function sortList(list) {
  const listItems = Array.from(list.children);

  const itemsToSort = listItems.slice(0, 10);

  itemsToSort.sort((a, b) => {
    const salaryA = getSalaryValue(a);
    const salaryB = getSalaryValue(b);

    return salaryB - salaryA;
  });

  // Dodaj posortowane elementy z powrotem do listy
  for (const item of itemsToSort) {
    list.appendChild(item);
  }
}

function getEmployees(list) {
  return Array.from(list.children)
    .slice(0, 10) // TYLKO 10 pierwszych elementów
    .map((item) => {
      return {
        imię: item.textContent.trim(),
        stanowisko: item.dataset.position,
        wynagrodzenie: getSalaryValue(item),
        wiek: Number(item.dataset.age),
      };
    });
}

// Posortuj listę
sortList(employeeList);

// Pobierz tablicę pracowników - DODAJ TE LINIĘ
getEmployees(employeeList);
