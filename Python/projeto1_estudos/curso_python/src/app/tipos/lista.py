nums = [1,2,3]

print(type(nums))
print(f'Listagem: {nums}')
print(len(nums))
print(f'Tamanho da Listagem: {len(nums)}')

nums.append(3)
nums.append(4)
nums.append(5)
print(len(nums))
print(f'Listagem: {nums}')

nums[3] = 4
nums[4] = 5
nums[5] = 6
print(len(nums))
print(f'Listagem: {nums}')

nums.insert(0, 15)
print(f'Listagem: {nums}')



