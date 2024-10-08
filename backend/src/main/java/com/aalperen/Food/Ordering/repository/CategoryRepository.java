package com.aalperen.Food.Ordering.repository;

import com.aalperen.Food.Ordering.entity.Category;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface CategoryRepository extends JpaRepository<Category, Long> {

    List<Category> findByRestaurantId(Long restaurantId);
}
