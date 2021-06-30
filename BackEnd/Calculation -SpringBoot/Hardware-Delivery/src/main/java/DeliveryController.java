import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;

import delivery.domain.Delivery;

/**
 * 
 */

/**
 * @author Harini
 *
 */
public class DeliveryController {
	
	@Controller
	public class StudentController {
		
		@GetMapping("/index")
		public String viewForm (Model model) {
			model.addAttribute("delivery", new Delivery());
			return "index";
		}
		
		@PostMapping("/result")
		public String processForm(@ModelAttribute Delivery delivery, BindingResult result, Model model) {
		model.addAttribute("delivery",delivery);
		return "result";
		}
	}
}
		

