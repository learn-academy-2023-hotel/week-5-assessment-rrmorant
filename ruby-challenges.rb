# ASSESSMENT 5: Ruby Coding Practical Questions
# MINASWAN

# -------------------1) Create a method that takes in a hash and returns one array with all the hash values at their own index and in alphabetical order. No nested arrays. Use the test variable provided.
# HINT: Google 'ruby get rid of nested arrays'

us_states = { northwest: ['Washington', 'Oregon', 'Idaho'], southwest: ['California', 'Arizona', 'Nevada'], notheast: ['Maine', 'New Hampshire', 'Rhode Island'] }
# Expected output: ['Arizona', 'California', 'Idaho', 'Maine', 'Nevada', 'New Hampshire', 'Oregon', 'Rhode Island', 'Washington']

def state_order(order)
  # method state_order with order as the parameter
  order.values.flatten.sort
  # used the .flatten method, which turns the hash into a single array with the only the values. the .sort to sort all the state in ABC order
end
  p state_order(us_states)
  # output - ["Arizona", "California", "Idaho", "Maine", "Nevada", "New Hampshire", "Oregon", "Rhode Island", "Washington"]

  # Pseudo code: Without looking up the flatten method, I wouldn't have got the correct answer

# --------------------2a) Create a class called Bike that is initialized with a model, wheels, and current_speed. The default number of wheels is 2. The current_speed should start at 0. Create a bike_info method that returns a sentence with all the data from the bike object.

# Expected output example: 'The Trek bike has 2 wheels and is going 0 mph.

class Bike
  # Bike is the name of the class
  attr_accessor :model, :wheels, :current_speed
  # model, wheels, and current_speed are the attributes for getter and setter methods
  def initialize(model)
  # initialize with model as the parameter
    @model = model
    @wheels = 2
    @current_speed = 0
    # instant variables with wheels set at 2 and current_speed set at 0
  end
  def bike_info
    "The #{@model} bike has #{@wheels} wheels and is going #{@current_speed} mph."
    # string interpolation for the instant variables in the bike_info method 
  end


# biking = Bike.new('Trek')
# p biking.bike_info


# Pseudo code:

# -------------------2b) Add the ability to pedal faster and brake. The pedal_faster method should increase the speed by a given amount. The brake method should decrease the speed by a given amount. The bike cannot go negative speeds.

# Expected output example: my_bike.pedal_faster(10) => 10
# Expected output example: my_bike.pedal_faster(18) => 28
# Expected output example: my_bike.brake(5) => 23
# Expected output example: my_bike.brake(25) => 0

  def pedal_faster(pedal_speed)
    # pedal_faster method with pedal_speed as the parameter
    if 
      @current_speed = @current_speed - pedal_speed < 0
        @current_speed = 0
    else
      @current_speed += pedal_speed
      # conditional statement for if the current_speed is less than zero it will return 0. the else is suppose to increase the current_speed if pedal_speed is increased
    end
  end
end

biking = Bike.new('Trek')
p biking.bike_info
# "The Trek bike has 2 wheels and is going 0 mph."

biking.pedal_faster(10)
p biking.bike_info
# "The Trek bike has 2 wheels and is going 0 mph."

# Pseudo code: wasn't able to achieve increase in mph. keep getting 0 even when pedal speed us greater than 0