import pandas as pd
import numpy as np

# Generate sample data
data = {
    'Name': ['Alice', 'Bob', 'Charlie', 'David', 'Emily'],
    'Age': [25, 30, 35, 40, 45],
    'Score': [85, 90, 88, 92, 87]
}

# Create DataFrame
df = pd.DataFrame(data)

# Perform data analysis
print("Data Summary:")
print(df.describe())

# Calculate mean age
mean_age = np.mean(df['Age'])
print("Mean Age:", mean_age)

# Calculate mean score
mean_score = np.mean(df['Score'])
print("Mean Score:", mean_score)
