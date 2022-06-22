require 'jwt'

fake_secret = "FakeSECRET"
hmac_secret = 'MiniiSECRET'
token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiR2FsdHVzLUdlbmVyamV0IiwidXNlcm5hbWUiOiJHZW5lcmpldC11c2VybmFtZSIsImFkbWluIjoiWWVzIGhlIGlzIGFkbWluLCBidXQgQUktbWFjaGluZSBkb2VzIHRoZSBqb2IgYmVoYWxmIG9mIGhpbS4gR2FsdHVzIGp1c3QgcmVsYXhlcyBhbmQgdHJhdmVscyB1c3VhbGx5IiwiX2lkIjoiMSIsImlhdCI6MTY1NTg4ODExMSwiZXhwIjoxNjU1OTc0NTExfQ.8nY64d-zxA3TW5bXgwKO4V95qNV4uPkTe5w0XjpG6nc"
# decoded_token = JWT.decode token, fake_secret, true, { algorithm: 'HS256' } # this line will fail due to wrong secret
decoded_token = JWT.decode token, hmac_secret, true, { algorithm: 'HS256' }
puts token
puts "decoded token"
puts decoded_token