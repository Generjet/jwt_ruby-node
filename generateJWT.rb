require 'jwt'

# ===== default ============
# payload = { data: 'test2Serchmaa'}
# token = JWT.encode payload, nil, 'none'
# decoded_token = JWT.decode token, nil, false
# puts token
# puts "decoded token"
# puts decoded_token

# ========= with algorithm ======
fake_secret = "FakeSECRET"
hmac_secret = 'my$ecretK3y'
payload = { data: 'test2Serchmaa'}
token = JWT.encode payload, hmac_secret, 'HS256'
decoded_token = JWT.decode token, fake_secret, true, { algorithm: 'HS256' }
puts token
puts "decoded token"
puts decoded_token
