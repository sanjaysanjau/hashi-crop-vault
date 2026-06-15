-- Passwords are bcrypt hashes of 'Password@123'
INSERT INTO l_user (name, email, password_hash, role, is_active) VALUES
    ('Alice Johnson',   'alice.johnson@example.com',   '$2b$10$EixZaYVK1fsbw1ZfbX3OXePaWxn96p36WQoeG6Lruj3vjPGga31lW', 'admin', TRUE),
    ('Bob Smith',       'bob.smith@example.com',       '$2b$10$EixZaYVK1fsbw1ZfbX3OXePaWxn96p36WQoeG6Lruj3vjPGga31lW', 'user',  TRUE),
    ('Carol Williams',  'carol.williams@example.com',  '$2b$10$EixZaYVK1fsbw1ZfbX3OXePaWxn96p36WQoeG6Lruj3vjPGga31lW', 'user',  TRUE),
    ('David Brown',     'david.brown@example.com',     '$2b$10$EixZaYVK1fsbw1ZfbX3OXePaWxn96p36WQoeG6Lruj3vjPGga31lW', 'user',  FALSE),
    ('Eva Martinez',    'eva.martinez@example.com',    '$2b$10$EixZaYVK1fsbw1ZfbX3OXePaWxn96p36WQoeG6Lruj3vjPGga31lW', 'admin', TRUE); 
