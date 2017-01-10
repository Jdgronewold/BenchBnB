class Bench < ApplicationRecord
  validates :description, :lat, :long, presence: true

  def self.in_bounds(bounds)
    benches = Bench.all
    benches_keep = benches.select do |bench|
      lat_test = (bench.lat > bounds[:southWest][:lat].to_f &&
                  bench.lat < bounds[:northEast][:lat].to_f)
      long_test = (bench.long > bounds[:southWest][:long].to_f &&
                  bench.long < bounds[:northEast][:long].to_f)
      lat_test && long_test
    end
    return benches_keep
  end

end
