# ASSESSMENT 5: Coding Critique with AI

# Use AI to learn about the following code.

# Based on your learning, reverse engineer a prompt that this code would satisfy.

# Add comments to each line to explain the code.

taco_votes = ['fish taco', 'california burrito', 'Tacos Al Pastor', 'Carnitas tacos', 'California burrito', 'Fish taco', 'California Burrito', 'Fish Taco', 'Tacos de Barbacoa', 'tacos Al Pastor', 'fish taco', 'California burrito', 'fish taco', 'tacos al pastor', 'Carnitas tacos', 'Fish taco', 'tacos de barbacoa', 'fish taco', 'Carnitas Tacos', 'carnitas tacos', 'Fish Taco', 'fish taco']

# totals = taco_votes.reduce(Hash.new(0)) do |result, vote|
#   result[vote.downcase] += 1
#   result
# end

# p totals

def voting_taco(tacos)
  # voting_taco method with tacos as the parameter
  new_tacos = Hash.new(0)
  # new_tacos uses Hash.new(0) to store the vote count of each taco
  tacos.each do |voting|
    # tacos.each iterates over each element in the array and voting is each element iteration
    tacos_voted = voting.downcase
    # tacos_voted is the elements lowercased to ensure they are counted properly
    new_tacos[tacos_voted] += 1
    # += 1 increments the count for the array
  end
  new_tacos
  # return the new array with the counted votes
end

p voting_taco(taco_votes)
# {"fish taco"=>9, "california burrito"=>4, "tacos al pastor"=>3, "carnitas tacos"=>4, "tacos de barbacoa"=>2}