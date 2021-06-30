/**
 * 
 */
package delivery.domain;

/**
 * @author Harini
 *
 */
public class Delivery {
	
	private String type;
	
	private int distance;
	
	public int getDistance() {
		return distance;
	}
	public void setDistance(int distance) {
		this.distance = distance;
	}
	public String getType() {
		return type;
	}
	public void setType(String type) {
		this.type = type;
	}
	
	
	public double getDelivery() {
		
		double charge = 0;
		
		if (type=="Truck") {
			charge = 50.00;
		}
		else if (type=="Van") {
			charge = 40.00;
		}
		
		else if (type=="Bike") {
			charge = 35.00;
		}
		else if (type=="Three-Wheel") {
			charge = 32.00;
		}
		
		 return charge;
	}
	
	public double calculateCharge(double charge) {
		
		return charge*distance;
	}

}
