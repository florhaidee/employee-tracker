INSERT INTO departments (name)
VALUES
 ('Sales'),
 ('Engineering'),
 ('Finance'),
 ('Legal');

INSERT INTO roles (title, salary,department_id)
VALUES 
 ('Sales Lead Team', 100000,1),
 ('Salesperson', 80000,1),
 ('Sofware Engineer', 120000, 2), 
 ('Lead Engineer', 130000, 2),
 ('Accountant',125000,3),
 ('Bookeeper',100000,3),
 ('Lawyer',190000,4),
 ('Legal Team Lead',190000,4);

INSERT INTO employees (first_name, last_name, manager_id, role_id)
VALUES 
  ('Anthony', 'Trollope', NULL, 1),
  ('Charlotte', 'Yonge', 1, 2),
  ('Horace', 'Walpole', NULL, 4),
  ('Matthew', 'Lewis', 3, 3),
  ('William', 'Bedford', 3, 3),
  ('Anne', 'Radcliffe', NULL, 5),
  ('Charles', 'Brown', 6, 6),
  ('Eliza', 'Parsons', 6, 6),
  ('Susan', 'Hill', 10, 7),
  ('Sydney', 'Owenson', NULL, 8),
  ('Hubert', 'Crackanthorpe', 10, 7),
  ('William', 'Carleton', 3, 3),
  ('Gerald', 'Griffin', 3, 3);